<template>
    <div class="users">
        <h4>Users</h4>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(u, i) in users" :key="i">
                    <td>{{ u.id }}</td>
                    <td>{{ u.first_name }}</td>
                    <td>{{ u.last_name }}</td>
                    <td>{{ u.email }}</td>
                    <td><img height="30" :src="u.avatar" :alt="u.first_name + ' ' + u.last_name"></td>
                    <td><button @click="removeUser(i)">Remove</button></td>
                </tr>
                <tr v-if="users.length === 0">
                    <td colspan="6">No users found</td>
                </tr>
            </tbody>
            <tfoot v-if="pagination.total > 0">
                <tr>
                    <td colspan="3" class="summary">
                        Showing {{ pagination.firstElement }} to {{ pagination.lastElement }} of {{ pagination.total }} total elements.
                    </td>
                    <td colspan="3" class="pagination">
                        <button v-for="(p, i) in pagination.pages" :key="i" @click="gotoPage(p.page)" :disabled="p.disabled">
                            {{ p.name }}
                        </button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Users",
        data() {
            return {
                users : [],
                currentPage : parseInt(this.$route.params.page) || 1,
                totalPages : 0,
                perPage : 5,
                total : 0
            }
        },
        computed : {
            pagination() {
                let pagination = {
                    firstElement : (this.currentPage - 1) * this.perPage + 1,
                    lastElement : (this.currentPage * this.users.length),
                    total : this.total,
                    pages : []
                };

                if (this.totalPages === 0) {
                    return pagination;
                }
                let pages = [{
                    name : 'First',
                    page : 1,
                    disabled : this.currentPage === 1
                }];
                for (let i = 1; i <= this.totalPages; i++) {
                    pages.push({
                        name : 'Page ' + i,
                        page : i,
                        disabled : this.currentPage === i
                    });
                }
                pages.push({
                    name : 'Last',
                    page : this.totalPages,
                    disabled : this.currentPage === this.totalPages
                });

                pagination.pages = pages;

                return pagination;
            }
        },
        watch: {
            async $route(to, from) {
                console.log(to, from);
                if (to.params && to.params.page) {
                    this.currentPage = parseInt(to.params.page);
                    await this.getUsers(this.currentPage);
                }
            }
        },
        methods : {
            async getUsers(page) {
                let body = await fetch('https://reqres.in/api/users?page=' + page)
                    .then(response => response.json());
                this.totalPages = body.total_pages;
                this.users = body.data;
                this.perPage = body.per_page;
                this.total = body.total;
            },
            removeUser(i) {
                if (confirm('Are you sure?')) {
                    this.users.splice(i, 1);
                }
            },
            gotoPage(page) {
                if (page !== this.page) {
                    this.$router.push({
                        name : 'users',
                        params : {
                            page : page
                        }
                    });
                }

            }
        },
        async mounted() {
            await this.getUsers(this.currentPage);
        }
    }
</script>

<style lang="less" scoped>
table {
    width: 100%;
    border-collapse: collapse;
    border: solid 1px grey;

    td, th {
        padding: 5px;
    }

    thead tr {
        background: darkgray;
        color: white;

        th:not(:last-child) {
            border-right: solid 1px grey;
        }
    }

    tbody {
        tr td:not(:last-child) {
            border-right: solid 1px grey;
        }

        tr:nth-child(2n) {
            background: lightgray;
        }
    }

    tfoot {
        background: darkgray;
        color: white;
        .summary {
            text-align: left;
        }
        .pagination {
            text-align: right;
            button {
                margin: 0 5px;
            }
        }
    }

}
</style>